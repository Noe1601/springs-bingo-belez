export const getMenuFrontEnd = (role = 'USER_ROLE') => {
    const menu = [{
            titulo: 'Dashboard',
            icono: 'mdi mdi-gauge',
            submenu: [
                { titulo: 'Dashboard', url: 'dashboard' }
            ]
        },

        {
            titulo: 'Mantenimientos',
            icono: 'mdi mdi-folder-lock-open',
            submenu: [
                { titulo: 'Cartones', url: 'home' },

            ]
        }


    ];

    if (role === 'ADMIN_ROLE') {
        menu[1].submenu.unshift({ titulo: 'Usuarios', url: 'usuarios' })
        menu[1].submenu.push({ titulo: 'Configuraciones', url: 'configuracion' })
        menu[1].submenu.push({ titulo: 'Jugadores', url: 'jugador' })
        menu[1].submenu.push({ titulo: 'Ganadores', url: 'ganador' })
        menu[1].submenu.push({ titulo: 'Jugadas', url: 'jugadas' })
    }


    return menu;
}