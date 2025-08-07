import { Injectable } from '@angular/core';
import { System } from '../../shared/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SystemFilterService {

  constructor() { }

  /**
   * Filtra los sistemas basado en el rol del usuario
   * @param systems - Array de todos los sistemas
   * @param userRole - Rol del usuario actual
   * @returns Array de sistemas filtrados según el rol
   */
  filterSystemsByRole(systems: System[], userRole: string): System[] {
    // Si no hay rol especificado, mostrar todos los sistemas
    if (!userRole) {
      return systems;
    }

    // Filtrar sistemas que incluyan el rol del usuario en allowedRoles
    return systems.filter(system => {
      if (!system.allowedRoles || system.allowedRoles.length === 0) {
        // Si no hay roles especificados, mostrar el sistema
        return true;
      }
      
      // Verificar si el rol del usuario está en la lista de roles permitidos
      return system.allowedRoles.includes(userRole);
    });
  }
}
