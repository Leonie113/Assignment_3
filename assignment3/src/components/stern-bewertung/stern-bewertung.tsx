import { Component, h, Event, EventEmitter, Listen} from '@stencil/core';

@Component({
  tag: 'stern-bewertung',
  styleUrl: 'stern-bewertung.css',
  
})

  export class sternBewertung {
    
    @Event() starRate: EventEmitter;
    @Listen('input')
        onInput(event) {
            this.starRate.emit({
                event,
                value: event.target.value
            });
            alert("Thanks for rating us. You gave us " + event.target.value + " stars")
        }


      render() {
          return(
            <div class="star-all">
            <h1 class="please-rate">Please Rate Us</h1>
            <div class="star-rating">
                <input type="radio" id="5-stars" name="rating" value="5" />
                <label htmlFor ="5-stars" class="star">&#9733;</label>
                <input type="radio" id="4-stars" name="rating" value="4" />
                <label htmlFor ="4-stars" class="star">&#9733;</label>
                <input type="radio" id="3-stars" name="rating" value="3" />
                <label htmlFor ="3-stars" class="star">&#9733;</label>
                <input type="radio" id="2-stars" name="rating" value="2" />
                <label htmlFor ="2-stars" class="star">&#9733;</label>
                <input type="radio" id="1-star" name="rating" value="1" />
                <label htmlFor ="1-star" class="star">&#9733;</label>
            </div>
            </div>

          );
      }
  }

