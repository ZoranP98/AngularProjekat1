import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {

    (function() {
      'use strict';
      window.addEventListener('load', function() {
        
        var forms = document.getElementsByClassName('needs-validation');
        
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event: { preventDefault: () => void; stopPropagation: () => void; }) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
  }

}
