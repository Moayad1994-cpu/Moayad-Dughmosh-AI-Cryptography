from flask import Flask, render_template, request
from cryptography.fernet import Fernet

app = Flask(__name__)

# Generate a key for encryption and decryption
key = Fernet.generate_key()
cipher_suite = Fernet(key)

@app.route('/', methods=['GET', 'POST'])
def index():
    encrypted_text = ''
    decrypted_text = ''

    if request.method == 'POST':
        if 'encrypt' in request.form:
            text_to_encrypt = request.form['text_to_encrypt']
            encrypted_text = cipher_suite.encrypt(text_to_encrypt.encode()).decode()

        elif 'decrypt' in request.form:
            text_to_decrypt = request.form['text_to_decrypt']
            try:
                decrypted_text = cipher_suite.decrypt(text_to_decrypt.encode()).decode()
            except:
                decrypted_text = "Invalid decryption text!"

    return render_template('index.html', encrypted_text=encrypted_text, decrypted_text=decrypted_text)

if __name__ == '__main__':
    app.run(debug=True)
