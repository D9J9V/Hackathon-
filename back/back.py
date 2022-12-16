from flask import Flask, request 
from flask_cors import CORS 
from master import CREATE_IMG

app = Flask(__name__)

CORS(app)

@app.route("/")

def home():
    return("<h1> hola </h1>")

@app.route("/button",methods=["POST"])

def button():
    print("Esperando ...")
    new = CREATE_IMG("Yo y un grupo de amigos decidimos celebrar el cumpleaños de uno de nosotros con una fiesta en casa. Estábamos emocionados de pasar una noche divertida juntos. La fiesta comenzó temprano en la tarde y había muchas cosas para hacer. Algunos de nosotros nos encargamos de preparar la comida y las bebidas, mientras que otros se encargaron de decorar la casa con globos y luces. Cuando llegó la noche, nos reunimos en el jardín y comenzamos a bailar y cantar. La música estaba a todo volumen y todos nos divertíamos mucho. Algunos de nosotros incluso hicimos trucos de magia y todos nos reímos mucho con nuestras bromas. A medida que avanzaba la noche, la fiesta se puso cada vez más animada. Todos nos divertíamos mucho y nadie quería irse a casa. Finalmente, después de muchas horas de risas y diversión, la fiesta llegó a su fin. Todos estábamos cansados, pero felices de haber pasado una noche tan increíble juntos. ¡Fue una fiesta que nunca olvidaríamos!")
    res = new.generacionIMG()
    data = request.json
    print(data)
    print("Esperando ...")
    print("Este es el link:", res)
    return {"REcibido":True}

if __name__ == "__main__":
    app.run()