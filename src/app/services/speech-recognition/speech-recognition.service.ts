// Import modules
import { Injectable } from '@angular/core';

import { IWindow } from "./models/speech.model";
declare var window: IWindow;

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {
  private speech!: SpeechRecognition;
  public stopped: boolean = false;
  public bufferContent: string[] = [];
  public content: string = "";

  /**
   * Responsible for verifying if the browser supports voice recognition.
   */
  isSupported() {
    return window.webkitSpeechRecognition;
  }

  /**
   * Responsible for initializing the necessary configurations for 
   * speech recognition.
   */
  private init(): void {
    if (!this.speech) {
      this.speech = new window.webkitSpeechRecognition();

      // Set attributes
      this.speech.lang = "es";
      this.speech.continuous = true;
      this.speech.interimResults = true;

      // Watch events
      this.watchResults();
    }
  }

  /**
   * Responsible for starting or stopping according to status.
   */
  start() {
    // Initialize
    this.init();

    // Start or pause
    !this.stopped ? this.speech.start() : this.speech.stop();

    // Change status
    this.stopped = !this.stopped;
  }

  /**
   * Responsible for assigning the text according to what the user is narrating.
   */
  private watchResults() {
    this.speech.addEventListener("result", e => {
      const index = e.resultIndex;
      const result = e.results.item(index);
      const content = result.item(0).transcript;
      
      // Update realtime
      this.content = this.bufferContent.join(" ") + content;

      if (result.isFinal) {
        this.setBufferContent(content);

        this.content = this.bufferContent.join(" ");
      }
    });
  }

  /**
   * Responsible for speaking the text entered by the user.
   * @param text 
   */
  public speak(text: string) {
    try {
      const uttearance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(uttearance);
    } catch (error) {
      console.error(error);
    }
  }

  setBufferContent(message: string): void {
    this.bufferContent.push(message);
  }
}
