import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-angular-example',
  imports: [RouterLink],
  templateUrl: './angular-example.html',
  styleUrl: './angular-example.css',
})
export class AngularExample {

  copyCode(codeElement: HTMLElement | null): void {
    if (!codeElement) {
      return;
    }

    const text = codeElement.textContent ?? '';

    if (!text.trim()) {
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    }
  }
}
