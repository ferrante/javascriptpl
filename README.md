JavaScript.pl
=============

Jak dodać nowy artykuł?
-----------------------

1. Fork tego repozytorium, ściągnij kod do siebie (skoro to czytasz, to zakładam, że znasz podstawy Gita i GitHuba).
2. Aby dodać nowy wpis wystarczy zajrzeć do folderu `tips` - są tam pliki `.xml` dla każdego wpisu oddzielnie. Najwygodniej będzie, jak skopiujesz jeden istniejący, zmienisz mu nazwę i użyjesz jako szablon.
3. W swoim pliku `.xml` podaj kolejno *tytuł*, *autora*, *url*, *datę* i oczywiście *treść*. Pamiętaj, by ją dobrze formatować (tagi `code` i `pre` przede wszystkim).
4. Z poziomu głównego folderu projektu uruchom w konsoli plik `./build.sh` - potrzebujesz zainstalowanego **Node.js** i szablony **Mustache**. Node jest domyślnie w systemie Mac OSX, natomiast Mustache ściągniesz wpisując w konsoli `npm install mustache`. Po uruchomieniu `./build.sh` powinieneś zobaczyć takie oto komunikaty:

        Doing git pull...
        Already up-to-date.
        Building a website...
        Building... done!

5. Jeśli wszystko poszło dobrze, to właśnie dodałeś nowy artykuł, gratulacje! W folderze `articles` pojawił się nowy plik zbudowany na podstawie tego z `tips`, a lista zmodyfikowanych plików obejmuje dwa wspomniane przed chwilą i główny plik `index.html`.
5. Dodajesz zmodyfikowane pliki poprzez `git add .`, robisz `commit` i `push` na serwer. Następnie na swoim forku na GitHubie odnajdujesz przycisk **Pull Request** - po kliknięciu pojawi się opcja dodania nowego *requesta*, w którym podajesz tytuł i krótki opis.
6. Autor widzi, że to co dodałeś jest dobre, robi *merge*, Twoje zmiany trafiają do głównego repozytorium, wszyscy są szczęśliwi i idą na piwo.

###Podziękowania###
* @Riddle za implementację responsive web design
* @Karolinaszczur za favikonkę