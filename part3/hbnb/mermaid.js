```mermaid
        USER {
            CHAR(36) id PK
            VARCHAR(255) first_name
            VARCHAR(255) last_name
            VARCHAR(255) email UNIQUE
            VARCHAR(255) password
            BOOLEAN is_admin DEFAULT FALSE
        }

        PLACE {
            CHAR(36) id PK
            VARCHAR(255) title
            TEXT description
            DECIMAL(10,2) price
            FLOAT latitude
            FLOAT longitude
            CHAR(36) owner_id FK
        }

        REVIEW {
            CHAR(36) id PK
            TEXT text
            INT rating (1-5)
            CHAR(36) user_id FK
            CHAR(36) place_id FK
        }

        AMENITY {
            CHAR(36) id PK
            VARCHAR(255) name UNIQUE
        }

        PLACE_AMENITY {
            CHAR(36) place_id FK
            CHAR(36) amenity_id FK
        }

        USER ||--o{ PLACE : "owns"
        USER ||--o{ REVIEW : "writes"
        PLACE ||--o{ REVIEW : "has"
        PLACE ||--o{ PLACE_AMENITY : "has"
        AMENITY ||--o{ PLACE_AMENITY : "belongs to"
```