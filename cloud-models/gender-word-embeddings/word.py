from gensim.scripts.glove2word2vec import glove2word2vec
from gensim.models import KeyedVectors
import pickle

# download glove.6B.100d.txt from
# https://www.kaggle.com/danielwillgeorge/glove6b100dtxt
# and place it in the current directory

glove_filename = "glove.6B.100d.txt"
glove_path = "./glove.6B.100d.txt"
word2vec_output_file = glove_filename+'.word2vec'

#glove_input_file = glove_filename
def setupfiles():
    glove2word2vec(glove_path, word2vec_output_file)

#function to save model into kv file
def savemodel():
    model = KeyedVectors.load_word2vec_format(word2vec_output_file, binary=False)
    pickle.dump(model, open("word_embedding_model.p", "wb"))
# run this once
# setupfiles()

# load the Stanford GloVe model
model = KeyedVectors.load_word2vec_format(word2vec_output_file, binary=False)

#Show a word embedding
print('King: ',model.get_vector('king'))

result = model.most_similar(positive=['woman', 'king'], negative=['man'], topn=1)
print('Most similar word to King + Woman - Man: ', result)

result = model.most_similar(positive=['male'], topn=10)
print('10 most simliar words to male: ', result)

result = model.similar_by_word("cat")
print("Cat is similar to {}: {:.4f}".format(*result[0]))
result = model.similar_by_word("father")
print("Father is similar to {}: {:.4f}".format(*result[0]))

result = model.doesnt_match("breakfast cereal dinner lunch".split())
print("Outlier in 'breakfast cereal dinner lunch': ", result)

result = model.similarity('woman', 'football')
print('similarity of "woman" to "football": ', result)
result = model.similarity('man', 'football')
print('similarity of "man" to "football": ', result)

result = model.distance('woman', 'football')
print('distance between "woman" and "football": ', result)
result = model.distance('man', 'football')
print('distance between "man" and "football": ', result)