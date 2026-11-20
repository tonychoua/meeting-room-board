# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

There is no code yet. The repository has only `spec.md`, which is the source of truth for requirements. Read it before implementing anything. Keep scope to the MVP and respect the "非目標" (non-goals) section. When requirements change, update `spec.md` first.

## 開發規範（必須遵守）

- 本專案為單一 HTML 檔案，檔名固定為 `index.html`（HTML、CSS、JS 全部寫在檔內）。禁止拆分成多個檔案，禁止引入外部框架或函式庫（包含 CDN）。
- 所有介面文字與程式註解使用繁體中文。
- 每次修改後，用一句話說明改了什麼。

## Build / run / test

- No build step, package manager, test framework, or backend. Open `index.html` by double-clicking it in Chrome or Edge.
- Verification is manual against the 10 acceptance criteria in `spec.md` §6.

## Architecture constraints (from spec.md)

- **Storage**: one `localStorage` key (e.g. `meeting-room-board:v1`) holding a JSON array of bookings. No backend, no sync.
- **Booking shape**: `{ id, roomId, date: "YYYY-MM-DD", startHour: 8–17, endHour: 9–18, title }`. Whole hours only, `endHour > startHour`, `title` required.
- **Rooms**: exactly 3, hardcoded (會議室 A/B/C); no room-management UI.
- **View**: single-day timeline — 3 room columns × 10 hourly rows (08:00–18:00), with previous/today/next and a date picker. Multi-hour bookings span contiguous cells.
- **Conflict rule**: overlap within the same room and date is rejected on both create and edit; an edit must exclude the booking itself from the check. Different rooms may share a time slot.
- **No delete**: by explicit user decision, bookings can only be edited, never deleted. Do not add a delete control.
- Dates and times use the browser's local time zone.
