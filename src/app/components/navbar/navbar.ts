import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Sidebar } from '@components/sidebar/sidebar';

const materialImports = [
  MatIconModule
]

@Component({
  selector: 'app-navbar',
  imports: [
    ...materialImports,
    Sidebar
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  sidebarOpen = signal<boolean>(false);

  toggleSidebar(): void {
    this.sidebarOpen.set(!this.sidebarOpen());
  }
  
}
