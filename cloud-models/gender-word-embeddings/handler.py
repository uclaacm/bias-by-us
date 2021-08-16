import json
from gensim.models import KeyedVectors
import os
import pickle
import boto3

s3 =boto3.resource('s3')
model = pickle.loads(s3.Bucket("bias-by-us-nlp-models").Object("college-models/word_embedding_model.p").get()['Body'].read())
def lambda_handler(event, context):
    """
    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format

        Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

    context: object, required
        Lambda Context runtime methods and attributes

        Context doc: https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

    Returns
    ------
    API Gateway Lambda Proxy Output Format: dict

        Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
    """

    WORD_WEIGHT = 100
    word = event['word']
    if word is None:
        return {
        'statusCode':400,
        'body': json.dumps(
            {
                "message": "Invalid word",
            }
        )
        }

    #default score
    try: 
        word_index = model.key_to_index[word]
        result = model.similarity('man', word)
        score = result * WORD_WEIGHT
        return {
        'statusCode':200,
        'body': json.dumps(
            {
                "message": score,
            }
        )
        }
    except KeyError:
        score =0
        return {
        'statusCode':400,
        'body': json.dumps(
            {
                "message": "Invalid word",
            }
        )
        }
    

    
