import { Component, OnInit, Input } from '@angular/core';

// Import models
import { Task } from 'src/app/models/Note.models';

// Import services
import { SpeechRecognitionService } from "src/app/services/speech-recognition/speech-recognition.service";

@Component({
  selector: 'app-note-sticker',
  templateUrl: './note-sticker.component.html',
  styleUrls: ['./note-sticker.component.css']
})
export class NoteStickerComponent implements OnInit {
  @Input() sticker!: Task;
  font = 0;

  constructor(
    private speechService: SpeechRecognitionService
  ) {}

  ngOnInit(): void {
    this.background();
  }

  public speak(text: string): void {
    this.speechService.speak(text);
  }

  public background(): void {
    this.font = Math.round(Math.random() * 10);
  }
}
