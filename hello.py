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

#Division de arreglo

language_slice = language[0:3]
print(language_slice)

#Reverse

reversed_language = language[:: -1]
print(reversed_language)

#Funciones de string

print(language.count("t"))
print(language.isnumeric())
print(language.startswith("Py"))

#Listas

my_list = list()   #Formas de declarlas
my_other_list = []

print(len(my_list))

my_list = [35, 24, 62, 17, 30, 30, 17]
print(my_list)

my_other_list = [29, "Andres"] #Las listas reciben tipos de datos diferentes
print(my_other_list[-1]) #Se pueden recorrer de atras hacia adelante con indices negativos

print(my_list.count(30)) #retorna el numero de ocurrencias de un elemento en la lista

print(my_list + my_other_list) #Concatenar dos listas

my_other_list.append("Gonzalez") #Inserta al final
print(my_other_list)

my_other_list.insert(1, "negro") #Inserta en el indice indicado lista.insert(indice, "elemento")
print(my_other_list)

my_other_list.remove("negro")
print(my_other_list)

print(my_list.pop())
print(my_list) #Elimina el ultimo elemento

my_list.pop(0) #Elimina el elemento de la lista que tiene el indice pasado en el argumento del .pop
print(my_list) 

my_list.clear() #Borra todos los elementos del arreglo
print(my_list)

my_other_list.insert(3, "Azul")
print(my_other_list)

my_other_list.reverse() #Invierte los valores de la lista
print(my_other_list)

my_new_list = [4, 29, 36, 10, 430, 7]

my_new_list.sort() #Ordena de menor a mayor
print(my_new_list)

#Tuplas

