import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appRipple]',
  standalone: true,
})
export class RippleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onClick(event: MouseEvent): void {
    const button = this.el.nativeElement;
    const circle = this.renderer.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    this.renderer.addClass(circle, 'ripple');
    this.renderer.setStyle(circle, 'width', `${diameter}px`);
    this.renderer.setStyle(circle, 'height', `${diameter}px`);
    this.renderer.setStyle(
      circle,
      'left',
      `${event.clientX - button.getBoundingClientRect().left - radius}px`
    );
    this.renderer.setStyle(
      circle,
      'top',
      `${event.clientY - button.getBoundingClientRect().top - radius}px`
    );

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      this.renderer.removeChild(button, ripple);
    }

    this.renderer.appendChild(button, circle);
  }
}
