@echo off
ng build --configuration production
xcopy .\dist ..\App.Site\wwwroot\scripts\client\ /S /E /Y 