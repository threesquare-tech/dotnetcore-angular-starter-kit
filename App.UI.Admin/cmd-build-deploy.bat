@echo off
ng build --configuration production
xcopy .\dist ..\App.Site\wwwroot\scripts\admin\ /S /E /Y 