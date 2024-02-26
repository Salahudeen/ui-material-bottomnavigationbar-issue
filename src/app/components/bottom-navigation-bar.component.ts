import { Component, ElementRef, ViewChild } from '@angular/core';
import { BottomNavigationBar, TabPressedEventData, TabReselectedEventData, TabSelectedEventData } from '@nativescript-community/ui-material-bottomnavigationbar';
import { Color, Font, ImageSource } from '@nativescript/core';

@Component({
    moduleId: module.id,
    selector: 'ns-bottom-navigation-bar',
    templateUrl: './bottom-navigation-bar.component.html'
})
export class BottomNavigationBarComponent {
    homeIcon: ImageSource;
    searchIcon: ImageSource;
    browseIcon: ImageSource;
    
    @ViewChild('bottomNavigationBar', { read: ElementRef, static: false })
    private _bottomNavigationBar: ElementRef<BottomNavigationBar>;

    ngOnInit(): void {
        const iconColor = new Color(255, 255, 255, 255);
        let iconFont: Font;
        if (__IOS__)
          iconFont = new Font('Font Awesome 5 Free', 28, 'normal', '900');
        else iconFont = new Font('fa-solid-900', 28, 'normal', '900');
    
        this.homeIcon = ImageSource.fromFontIconCodeSync(
          '\uf015',
          iconFont,
          iconColor,
        );
        this.searchIcon = ImageSource.fromFontIconCodeSync(
          '\uf002',
          iconFont,
          iconColor,
        );
        this.browseIcon = ImageSource.fromFontIconCodeSync(
          '\uf0c0',
          iconFont,
          iconColor,
        );    
      }

    onbottomNavigationBarLoaded(): void {
        const bottomNavigationBar = this._bottomNavigationBar.nativeElement;
        bottomNavigationBar.showBadge(1);
        bottomNavigationBar.showBadge(2, 4);
    }

    onBottomNavigationTabPressed(args: TabPressedEventData): void {
        alert('This tab has isSelectable: false, and should be used to perform actions');
        console.log(`pressed tab index:  ${args.index}`);
    }

    onBottomNavigationTabSelected(args: TabSelectedEventData): void {
        console.log(`old tab index:  ${args.oldIndex}`);
        console.log(`selected tab index:  ${args.newIndex}`);
    }

    onBottomNavigationTabReselected(args: TabReselectedEventData): void {
        alert('Tab Reselected');
        console.log(`reselected tab index:  ${args.index}`);
    }
}
