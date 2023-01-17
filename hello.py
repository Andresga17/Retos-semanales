print("hola mundo")

#tipos de datos

print(type(3))
print(type(1.5))
print(type(1 + 4j))
print(type("soy andres"))

#variables

my_variable = "variable string"
my_int_variable = 13
print(my_variable, "string: ", my_int_variable)

#casteo o parseo (no me acuerdo, pero eso)
int_to_string = str(my_int_variable)
print(type(int_to_string))

# Algunas funciones del sistema

print(len(my_variable))

# Variables en una sola linea

name, surname, age = "Andres", "Gonzalez", 29
print(name, surname, age)

#Operadores aritmeticos

print(10 ** 3)
print( 44 // 3)

print("Hola " * 5)

#Operadores comparativos

print(3 == 4)
print(4 != 5)

#Operadores logicos

print(3 > 4 and "hola" > "Python")
print(3 > 4 or "hola" > "Python")
print(not(3 > 4))

#Strings

my_other_string = "mi otro string"
print(len(my_other_string))

my_new_line_string = "Este es un string\ncon salo de linea"
print(my_new_line_string)

my_tab_string = "\tEste es un string con tabulacion"
print(my_tab_string)

#Formateo 

name, surname, age = "Andres", "Gonzalez", 29

print("Mi nombre es {} {} y mi edad es {}".format(name, surname, age))
print("Mi nombre es %s %s y mi edad es %d" %(name, surname, age))
print(f"Mi nombre es {name} {surname} y mi edad es {age}")

#Desempaquetado de caracteres

language = "Python"

a, b, c, d, e, f = language

print(a)
print(b)

#Division

language_slice = language[0:3]
print(language_slice)

