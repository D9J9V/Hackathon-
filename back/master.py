import os
import openai
import requests
from keys import KEYS

class CREATE_IMG ():
    def __init__(self,texto):
        self.primary_text = texto
        self.traslate_text = ""
        self.mini_text = ""
        self.advance_text = ""
        self.final_text = ""
        openai.api_key = KEYS
    def traducción (self):
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt="Translate this into English:\n\n"+self.primary_text+"\n\n",
            temperature=0.3,
            max_tokens=100,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )
        self.traslate_text = list(response.values())[4][0]["text"]
    
    def reducción (self):
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt="Summarize this for a short history with 50 words:\n\n"+self.traslate_text,
            temperature=0.7,
            max_tokens=256,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )
        self.mini_text = list(response.values())[4][0]["text"]

    def limpiarTexto (self):
        self.final_text = self.mini_text.replace("\n","")
        self.final_text = self.final_text.replace(" ","+")

    def generacionIMG (self):
        self.traducción()
        self.reducción()
        self.limpiarTexto()

        url_lexica = "https://lexica.art/api/v1/search?q="+self.final_text
        r = requests.get(url = url_lexica)
        data = r.json()
        url = data['images'][2]['src']
        print(url)
        return url 

def exe():
    text = "Hoy ha sido un día genial. Ha sido mi cumpleaños y para celebrarlo he pasado todo el día con mi familia y mis amigos. Por la mañana, me he levantado temprano para desayunar con mis padres y mi hermana Lola y me han preparado mi desayuno favorito: tortitas con fruta y chocolate. Después, hemos ido juntos al museo de las artes y las ciencias. Ha sido divertido. A la hora del almuerzo, hemos ido a mi restaurante favorito y ¡sorpresa! Todos mis amigos estaban allí. Me ha hecho muy feliz ver a toda la gente que quiero en el restaurante. Por la tarde, mis padres se han ido a casa y mis amigos, mi hermana y yo hemos ido al cine. Después, hemos ido todos a mi casa y nos hemos bañado en la piscina. Hemos pedido pizzas y hemos cenado en el jardín. A las once y media mis amigos se han tenido que ir y yo me he puesto a escribir un rato, pero ahora tengo sueño y voy a la cama también. Mañana te cuento más cosas."
    example = CREATE_IMG(text)
    example.generacionIMG()

exe()