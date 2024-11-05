import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ArchiveItem {
    title: string;
    identifier: string;
    files: AudioFile[];
    audioUrl?: string;
    cover?: string;
}

interface AudioFile {
    format: string;
    name: string;
}

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  items: any[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.searchItems();
  }

  searchItems() {
    if (!this.searchQuery) {
        console.error('La consulta de búsqueda está vacía.');
        return;
    }
    const url = `https://archive.org/advancedsearch.php?q=${this.searchQuery}&fl[]=title,identifier,mediatype,files,cover&rows=10&page=1&output=json`;
    this.http.get<any>(url).subscribe(
      (data) => {
        console.log(data);
        this.items = data.response.docs.map((item: any) => {
            return {
                title: item.title,
                identifier: item.identifier,
                audioUrl: this.getAudioUrl(item),
                cover: item.cover,
                mediatype: item.mediatype
            };
        });
      },
      error => {
        console.error('Error al cargar los elementos de Archive.org:', error);
      }
    );
  }

  filteredItems() {
    if (!this.selectedCategory) {
      return this.items;
    }
    return this.items.filter(item => item.mediatype === this.selectedCategory);
  }

  private getAudioUrl(item: any): string | null {
    if (!item.files || !Array.isArray(item.files)) {
      return null;
    }
    const audioFiles = item.files.filter((file: any) => file.format === 'MP3');
    return audioFiles.length > 0 ? `https://archive.org/download/${item.identifier}/${audioFiles[0].name}` : null;
  }
}