graph TD
    %% Definición de los actores
    subgraph Usuarios
        U[Residente]
        A[Admin Edificio]
    end

    %% Definición de los componentes de la aplicación
    subgraph Aplicación
        MA[Aplicación Móvil]
    end

    %% Definición de los servicios de Backend
    subgraph Backend
        subgraph Supabase
            DB_S[Base de Datos]
            AUTH_S[Autenticación]
            STORAGE_S[Almacenamiento ]
            EDGE_F[Edge Functions]
        end

        subgraph Strapi
            ADMIN_P[Panel de Administración]
            API_C[API de Contenido ]
            DB_ST[Base de Datos ]
        end
    end

    %% Conexiones y Flujos
    U -- Interactúa con --> MA

    %% Conexiones de la Aplicación Móvil a Supabase
    MA -- Autenticación de Usuarios --> AUTH_S
    MA -- Datos Transaccionales (Perfiles, Reservas, Invitados, Pagos) --> DB_S
    MA -- Acceso a Almacenamiento --> STORAGE_S
    MA -- Lógica Personalizada --> EDGE_F

    %% Conexiones de la Aplicación Móvil a Strapi
    MA -- Contenido (Anuncios, Áreas Comunes, Reglas) --> API_C

    %% Conexiones internas de Supabase
    EDGE_F -- Accede y Manipula --> DB_S

    %% Conexiones de Administrador a Strapi
    A -- Gestiona Contenido --> ADMIN_P
    ADMIN_P -- Configura y Almacena --> DB_ST
    API_C -- Provee Datos desde --> DB_ST

      %% Opcional: Relación entre Supabase y Strapi a nivel de datos (si hay IDs cruzados)
    DB_S -- FK area_id --> DB_ST
    
    %% Estilos (opcional, para mejorar la visualización en Mermaid Live Editor)
    classDef cloud fill:#11,stroke:#333,stroke-width:2px;
    class Supabase cloud;
    class Strapi cloud;