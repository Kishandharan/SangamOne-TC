@echo off
set var = %cd%
cd ../../venv/Scripts/
activate
cd %var%
python cal.py