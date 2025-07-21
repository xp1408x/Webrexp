graph TD
    %% Estilos para mejorar la visualización
    classDef actor fill:#ADD8E6,stroke:#333,stroke-width:2px;
    classDef process fill:#90EE90,stroke:#333,stroke-width:2px;
    classDef database fill:#FFD700,stroke:#333,stroke-width:2px;
    classDef decision fill:#FFB6C1,stroke:#333,stroke-width:2px;

    %% Flujo 1: Reserva de un Área Común
    subgraph Flujo: Reserva de Área Común
        R1[Residente]:::actor
        AM1[Aplicación Móvil]:::process
        EF1[Supabase Edge Function: Verificar Disponibilidad]:::process
        DB1_S[Supabase DB: bookings]:::database
        DB1_ST[Strapi DB: common_areas]:::database
        API1_S[Supabase API: Registrar Reserva]:::process

        R1 -- Seleccionar Área y Fecha --> AM1
        AM1 -- Consultar Disponibilidad --> EF1
        EF1 -- Consulta --> DB1_S
        EF1 -- Consulta (Reglas/Capacidad) --> DB1_ST
        EF1 -- Devolver Slots Disponibles --> AM1
        AM1 -- Confirmar Reserva --> API1_S
        API1_S -- Guarda --> DB1_S
        DB1_S -- Confirmación --> AM1
        AM1 -- Confirmación al Usuario --> R1
    end

    %% Flujo 2: Registro de un Invitado
    subgraph Flujo: Registro de Invitado
        R2[Residente]:::actor
        AM2[Aplicación Móvil]:::process
        API2_S[Supabase API: Guardar Invitado]:::process
        DB2_S[Supabase DB: guests]:::database
        EF2[Supabase Edge Function: Generar QR]:::process
        STORAGE2_S[Supabase Storage]:::database

        R2 -- Ingresar Datos Invitado --> AM2
        AM2 -- Enviar Datos Invitado --> API2_S
        API2_S -- Guarda --> DB2_S
        DB2_S -- Notifica --> EF2
        EF2 -- Sube Imagen --> STORAGE2_S
        STORAGE2_S -- URL QR --> DB2_S
        DB2_S -- URL QR --> AM2
        AM2 -- Mostrar QR --> R2
    end
