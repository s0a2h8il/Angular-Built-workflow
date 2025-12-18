import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structure',
  imports: [RouterLink],
  templateUrl: './structure.html',
  styleUrl: './structure.css',
})
export class Structure {
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
