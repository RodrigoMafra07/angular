import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { $ } from 'protractor';
import { SearchComponent } from './search.component';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
        
      
//const DOCUMENT: InjectionToken<Document>;

    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


//$(document).ready(function(){
  //$("#myInput").on("keyup", function() {
   // var value = $(this).val().toLowerCase();
   // $("#myTable tr").filter(function() {
    //  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //});
  //});
//});

