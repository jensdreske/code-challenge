import {
  Component, Host, h, Prop,
} from '@stencil/core';

@Component({
  tag: 'cta-component',
  styleUrl: 'cta-component.scss',
  shadow: true,
})
export class CtaComponent {
  @Prop() ctaTitle: string;

  @Prop() ctaText: string;

  @Prop() linkText: string;

  @Prop() imageLink: string;

  @Prop() imageAlt: string;

  @Prop({
    mutable: true,
    reflect: true,
  })
  visible = false;

  private handleCtaClick = () => {
    this.visible = true;
  };

  private handleCloseClick = () => {
    this.visible = false;
  };

  render() {
    return (
      <Host>
        <article class="ctaBox">
          <section class="ctaTextboxWrapper">
            <div class="ctaTextbox">
              <h2>{this.ctaTitle}</h2>
              <p>{this.ctaText}</p>

              <button class="ctaButton" onClick={this.handleCtaClick}>
                {this.linkText}
              </button>
            </div>
          </section>
          <div class="imageContainer">
            <img src={this.imageLink} alt={this.imageAlt} />
          </div>
        </article>
        <div class={this.visible ? 'contactbox visible' : 'contactbox'}>
          <div class="triangle"></div>
          <h2>Contact us</h2>
          <button onClick={this.handleCloseClick}>Close</button>
          <div class="contactInfo">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
