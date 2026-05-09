# Conexiones — Rodilla Segura

## Flujo esperado

1. `index.html` captura nombre + correo y envía a `Rodilla Segura Pre-Registros`.
2. Redirige a `gracias.html`.
3. `gracias.html` manda a `encuesta.html`.
4. `encuesta.html` guarda respuestas en `Rodilla Segura - Encuestas`.
5. Al guardar, desbloquea el botón para descargar `Temario-Rodilla-Segura.pdf`.

## Sheets

- Pre-registros: `1XZ4RM1-_pAHWWY-HYvbk9A5Z7pfE3t3ooXLdLpZtO8c`
- Encuestas: `1_2YHVjA7ZuC6aygBFzlo9HLt29aKGiMQxJGOScpicpo`

## PDF correcto

- `Temario-Rodilla-Segura.pdf`: `1zaLzB_p3hq_P5v_artglZB9CSRUj7HSP`

> Importante: el PDF debe estar compartido como “Cualquier persona con el enlace puede ver”, o los leads externos verán pantalla de login de Google.

## Encabezados recomendados

### Pre-registros

```text
Fecha | Nombre | Correo | Origen | Página | Fecha cliente
```

### Encuestas

```text
Fecha | Molestia en la rodilla | Situación actual | Qué quiere mejorar | Qué le frena | Interés principal | Mensaje para Chava | Origen | Página | Fecha cliente
```

## Apps Script

Este repo incluye dos archivos de referencia:

- `APPS_SCRIPT_PRE_REGISTROS.gs`
- `APPS_SCRIPT_ENCUESTAS.gs`

Cada uno va pegado en su proyecto de Apps Script correspondiente y luego se redeploya como Web App.

Config de deploy:

- Execute as: `Me`
- Who has access: `Anyone`

Después de redeployar, si Google genera una URL nueva, actualizar esa URL en el HTML correspondiente.
