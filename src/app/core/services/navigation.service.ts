import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  /**
   * Navega a una ruta preservando los parámetros de consulta actuales
   * @param path - Ruta a la que navegar
   * @param preserveQueryParams - Si mantener los parámetros de consulta (por defecto true)
   */
  navigateWithParams(path: string[], preserveQueryParams: boolean = true): void {
    const navigationExtras = preserveQueryParams ? { 
      queryParamsHandling: 'preserve' as const 
    } : {};
    
    this.router.navigate(path, navigationExtras);
  }

  /**
   * Navega de vuelta preservando los parámetros de consulta
   */
  navigateBack(): void {
    this.navigateWithParams(['/']);
  }

  /**
   * Navega a una categoría específica preservando el rol
   * @param categoryId - ID de la categoría
   */
  navigateToCategory(categoryId: string): void {
    this.navigateWithParams(['/category', categoryId]);
  }

  /**
   * Obtiene los parámetros de consulta actuales
   */
  getCurrentQueryParams(): any {
    return this.route.snapshot.queryParams;
  }
}
