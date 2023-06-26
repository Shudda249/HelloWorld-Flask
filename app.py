from flask import Flask, render_template, request, make_response, redirect, url_for
from flask_wtf import FlaskForm
from werkzeug.utils import secure_filename
from wtforms import SubmitField, FileField, HiddenField
from wtforms.validators import InputRequired
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secretkey'
app.config['ALLOWED_EXTENSIONS'] = {'jpg', 'jfif', 'jpeg', 'png', 'gif', 'mp3', 'wav', 'ogg', 'm4a'}
app.config['UPLOAD_FOLDER'] = 'static/soundboard/'



class FileForm(FlaskForm):
    file = FileField(label="File", validators=[InputRequired()])
    image_submit = SubmitField(label="Then Click Here")
    hidden_field = HiddenField(label="Hidden Field", id="hiddenInput")


def allowed_file(filename):
    return '.' in filename and \
    filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']



@app.route("/")
@app.route("/index")
def hello():
    return render_template("index.html")



@app.route("/rube")
def rube():
    return render_template("rube.html")




@app.route("/guess", methods=["GET", "POST"])
def guess():
  
    return render_template("guess.html")


    
@app.route('/soundboard', methods=["GET", "POST"])
def uploadImage():
    form = FileForm()
    radio_id = request.form.getlist('radio_form')
    image_cookies = []
    sound_cookies = []
    filename = []
    form.hidden_field.data = 'picture'
    media_type = request.form.get('hidden_field')
          

    for i in range(5):
        image_cookie_name = f"image_radio_id['{i}']"
        image_cookie = request.cookies.get(image_cookie_name)
        image_cookies.append(image_cookie)
        sound_cookie_name = f"sound_radio_id['{i}']"
        sound_cookie = request.cookies.get(sound_cookie_name)
        sound_cookies.append(sound_cookie)
        
    
    if request.method == 'POST':
        if form.validate_on_submit():
            if form.image_submit.data and 'file' in request.files:    
                file = request.files['file']              
                if file and allowed_file(file.filename):
                    filename = secure_filename(form.file.data.filename)
                    
                    if media_type == 'picture' and filename.lower().endswith(('jpg', 'jfif', 'jpeg', 'png', 'gif')):
                        file.save(os.path.join(app.config["UPLOAD_FOLDER"], 'images', filename))  
                        response = make_response(redirect(url_for('uploadImage', form=form, radio_id=radio_id, filename=filename, image_cookies=image_cookies, sound_cookies=sound_cookies)))
                        response.set_cookie(f'image_radio_id{radio_id}', filename, max_age=60*60*24*365*2)
                        return response
                    
                    elif media_type == 'sound' and filename.lower().endswith(('mp3', 'wav', 'ogg', 'm4a')):
                        file.save(os.path.join(app.config["UPLOAD_FOLDER"], 'sounds', filename))  
                        response = make_response(redirect(url_for('uploadImage', form=form, radio_id=radio_id, filename=filename, image_cookies=image_cookies, sound_cookies=sound_cookies)))
                        response.set_cookie(f'sound_radio_id{radio_id}', filename, max_age=60*60*24*365*2)
                        return response
                    

        else: 
                        print('nope')        
        
    return render_template('soundboard.html', filename=filename, form=form, radio_id=radio_id, image_cookies=image_cookies, sound_cookies=sound_cookies)

if __name__ == '__main__':
    app.run(debug=True)
