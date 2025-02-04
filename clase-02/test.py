import sys

print("Este es un mensaje desde el script de Python")

# Puedes recibir argumentos desde Node.js
if len(sys.argv) > 1:
  argumento = sys.argv[1]
  print(f"Argumento recibido desde Node.js: {argumento}")

# Puedes enviar datos a Node.js a través de la salida estándar
resultado = 10 * 2
print(f"Resultado desde Python: {resultado}")

# 
