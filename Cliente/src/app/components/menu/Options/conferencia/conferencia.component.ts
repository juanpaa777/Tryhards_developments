import { Component, OnInit, OnDestroy } from '@angular/core';
import Daily from '@daily-co/daily-js';

@Component({
  selector: 'app-conferencia',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent implements OnInit, OnDestroy {
  private call: any; // Cliente de llamada
  roomUrl: string = ''; // URL de la sala
  isConferenceStarted: boolean = false; // Estado de la conferencia
  participants: any[] = []; // Lista de participantes
  userId: string = ''; // ID del usuario que inicia la conferencia

  ngOnInit() {
    this.call = Daily.createCallObject(); // Inicializa el objeto de llamada aquí
    this.call.on('connection-state-changed', (state: any) => {
      console.log('Estado de conexión:', state);
    });

    // Aquí puedes obtener el userId del usuario que inicia la conferencia
    this.userId = this.getUserId(); // Implementa esta función según tu lógica de autenticación
  }

  ngOnDestroy() {
    this.leaveCall();
  }

  copyToClipboard() {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('value', this.roomUrl);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    alert('Enlace copiado al portapapeles!');
  }

  startConference() {
    if (this.roomUrl) {
      // Habilitar audio y video localmente
      this.call.setLocalAudio(true);
      this.call.setLocalVideo(true);

      this.call.join({ url: this.roomUrl }).then(() => {
        // Establecer datos del usuario después de unirse
        this.call.setUserData({ userId: this.userId });

        this.isConferenceStarted = true;

        // Configurar eventos
        this.call.on('joined-meeting', this.handleJoin);
        this.call.on('participant-joined', this.handleParticipantJoined);
        this.call.on('participant-left', this.handleParticipantLeft);
      }).catch((error: any) => {
        console.error('Error al unirse a la sala:', error);
        alert(`Error al unirse a la sala: ${error.message || error}`);
      });
    } else {
      alert('Por favor, ingresa un enlace de sala válido.');
    }
  }

  private getUserId(): string {
    // Implementa la lógica para obtener el ID del usuario
    // Por ejemplo, desde el almacenamiento local o desde un servicio de autenticación
    return localStorage.getItem('userId') || ''; // Ejemplo de obtención del ID
  }

  private handleJoin = () => {
    console.log('Unido a la reunión');
    this.updateParticipants();
  };

  private handleParticipantJoined = (event: any) => {
    console.log('Participante unido:', event.participant);
    this.participants.push(event.participant);
  };

  private handleParticipantLeft = (event: any) => {
    console.log('Participante salió:', event.participant);
    this.participants = this.participants.filter(participant => participant.session_id !== event.participant.session_id);
  };

  private updateParticipants() {
    this.call.participants().then((participants: any) => {
      this.participants = Object.values(participants);
    }).catch((error: any) => {
      console.error('Error al obtener participantes:', error);
    });
  }

  private leaveCall() {
    if (this.call) {
      this.call.leave();
      this.call.destroy(); // Libera recursos
    }
  }
}