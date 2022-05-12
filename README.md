Wymagania biznesowe:
- [x] użytkownik jest reprezentowany w systemie jako ID; każde ID będzie unikalne
- [x] platforma wspiera następujące waluty: PLN, EUR, USD
- [ ] domyślnie każdy z użytkowników posiada rachunek we wszystkich dostępnych walutach
- [ ] kurs wymiany walut będzie ustawiany w momencie startu aplikacji (np. wczytanie
  konfiguracji z pliku json/csv); platforma daje możliwość wymiany między wszystkimi
  dostępnymi walutami
- [ ] dla każdego z rachunków możliwe są następujące operacje:
- [ ] wpłata
- [ ] wypłata
- [ ] transfer środków do innego użytkownika platformy
- [ ] wymiana środków na inną walutę
- [ ] platforma umożliwia pobranie historii dla danego rodzaju operacji, konkretnej waluty,
  zakresu dat
- [ ] platforma umożliwia użytkownikom dostęp do informacji o saldzie oraz historii operacji dla
  każdego rachunku (bez paginacji)
- [ ] platforma powinna wspierać obsługę podstawowych błędów (np. wykonanie operacji z
  ujemną wartością danej waluty)