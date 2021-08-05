import sys
import json
import os
from gensim.scripts.glove2word2vec import glove2word2vec
from gensim.models import KeyedVectors

def lambda_handler(event, context):
    model = KeyedVectors.load_word2vec_format(os.environ['MODEL_LOCATION'], binary = False)
    
    # parse query string params
    words = json.loads(event)["words"]
    WORD_WEIGHT = 100
    
    print("Given words are: " + words)
    def getScore(word):
        result = model.similarity('man', word)
        score = result * WORD_WEIGHT
        return score
        
    scores = []
    for word in words:
        try:
            word_index = model.key_to_index[word]
            scores.append(getScore(word))
        except KeyError: 
            print("word doesn't exist!")
            scores.append(0)
        
    functionResponse = {}
    functionResponse['wordScores'] = scores
    
    
    httpResponse = {}
    httpResponse['statusCode'] = 200
    httpResponse['headers'] = {}
    httpResponse['headers']['Content-Type'] = 'application/json'
    httpResponse['body'] = json.dumps(functionResponse)
    return httpResponse