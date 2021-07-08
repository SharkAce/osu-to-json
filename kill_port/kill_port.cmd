FOR /F "tokens=5 delims= " %%P IN ('netstat -ano ^| findstr :%1') DO taskkill /PID %%P
exit