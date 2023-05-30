from flask import Flask, render_template, request, make_response
from flask_wtf import FlaskForm
from werkzeug.utils import secure_filename
from wtforms import SubmitField, FileField
from wtforms.validators import InputRequired
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secretkey'
app.config['ALLOWED_EXTENSIONS'] = {'jpg', 'jpeg', 'png', 'gif', 'wav', 'mp3'}
app.config['UPLOAD_FOLDER'] = 'static/soundboard/'



class FileForm(FlaskForm):
    file = FileField(label="File", validators=[InputRequired()])
    image_submit = SubmitField(label="Upload Images Here")
    sound_submit = SubmitField(label="Upload Sounds Here")
  

def allowed_file(filename):
    return '.' in filename and \
    filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route("/")
@app.route("/index")
def hello():
    return render_template("index.html")


@app.route('/soundboard', methods=["GET", "POST"])
def uploadImage():
    form = FileForm()
    radio_id = request.form.getlist('radio_form')
    image_cookies = []
    filename = []

    for i in range(5):
        cookie_name = f"radio_id['{i}']"
        image_cookie = request.cookies.get(cookie_name)
        image_cookies.append(image_cookie)
    
    if request.method == 'POST':
        if form.validate_on_submit():
            if form.image_submit.data and 'file' in request.files:    
                file = request.files['file']
                
                if file and allowed_file(file.filename):
                    filename = secure_filename(form.file.data.filename)
                    file.save(os.path.join(app.config["UPLOAD_FOLDER"], 'images', filename))  
                    response = make_response(render_template('soundboard.html', form=form, radio_id=radio_id, filename=filename, image_cookies=image_cookies))
                    response.set_cookie(f'radio_id{radio_id}', filename, max_age=60*60*24*365*2)
                    print(radio_id)
                    return response        
        
   
    # If no image cookies are set, show the default images
    print('RIGHT HERE')
 
    return render_template('soundboard.html', filename=filename, form=form, radio_id=radio_id, image_cookies=image_cookies)

if __name__ == '__main__':
    app.run()
