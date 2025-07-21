graph TD
    %% Actores
    Residente("Residente") 
    Admin("Admin Edificio") 

    %% Sistema
    subgraph "Sistema de Administración de Edificios"
        %% Casos de Uso del Residente
        subgraph "Modulo Home"
            UC_HP[Ver Home Principal]
            UC_RI[Ver Reservas Incoming]
            UC_PP[Ver Pagos Pendientes]
            UC_AP[Ver Anuncio Principal]
            UC_VI[Ver Visitas de Hoy]
        end

        subgraph "Modulo Reservas"
            UC_VDA[Ver Disponibilidad de Áreas Comunes]
            UC_RA[Reservar Área Común]
            UC_RRA[Ver Reglas de Área Común]
            UC_RCA[Ver Costo de Área Común]
        end

        subgraph "Modulo Invitados"
            UC_RI_G[Registrar Invitado]
            UC_GQ[Generar QR para Invitado]
        end

        subgraph "Modulo Anuncios"
            UC_IM[Informar Mantenimientos]
            UC_EA_Res[Ver Eventos en el Edificio]
            UC_CJ[Ver Comunicados Junta/Admin]
            UC_VC[Ver Venta/Compra Departamentos]
        end

        subgraph "Modulo Perfil"
            UC_DU[Actualizar Datos de Perfil]
        end

        subgraph "Autenticación"
            UC_Reg[Registrarse]
            UC_Log[Iniciar Sesión]
            UC_Cerrar[Cerrar Sesión]
        end

        %% Casos de Uso del Administrador
        subgraph "Gestión de Contenido (Strapi)"
            UC_CA[Crear Anuncio]
            UC_EA_Admin[Editar Anuncio]
            UC_ELA[Eliminar Anuncio]
            UC_GA[Gestionar Áreas Comunes]
            UC_GE[Gestionar Eventos]
            UC_GM[Gestionar Mantenimientos]
        end
    end

    %% Relaciones Actor-Caso de Uso (Residente)
    Residente --> UC_HP
    Residente --> UC_RI
    Residente --> UC_PP
    Residente --> UC_AP
    Residente --> UC_VI
    Residente --> UC_VDA
    Residente --> UC_RA
    Residente --> UC_RRA
    Residente --> UC_RCA
    Residente --> UC_RI_G
    Residente --> UC_GQ
    Residente --> UC_IM
    Residente --> UC_EA_Res
    Residente --> UC_CJ
    Residente --> UC_VC
    Residente --> UC_DU
    Residente --> UC_Reg
    Residente --> UC_Log
    Residente --> UC_Cerrar

    %% Relaciones Actor-Caso de Uso (Administrador)
    Admin --> UC_CA
    Admin --> UC_EA_Admin
    Admin --> UC_ELA
    Admin --> UC_GA
    Admin --> UC_GE
    Admin --> UC_GM

    %% Relaciones <<include>>
    UC_HP --> UC_RI
    UC_HP --> UC_PP
    UC_HP --> UC_AP
    UC_HP --> UC_VI

    UC_RA --> UC_VDA
    UC_RA --> UC_RRA
    UC_RA --> UC_RCA

    UC_GQ --> UC_RI_G

    UC_Log --> UC_HP
    UC_Reg --> UC_Log

    %% Relaciones <<extend>> (Ejemplos, pueden haber más)
    UC_RA -->|<<extend>>| UC_RCA
    UC_RA -->|<<extend>>| UC_RRA
