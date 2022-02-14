from main import db
from models import User, User_type, Training
from datetime import datetime

trainings_from_db = db.session.query(Training).all()
list_of_dates = []
for training in trainings_from_db:
    if training.group_id == 3:
        if training.date < datetime.today().date():
            list_of_dates.append(training.date)

print(list_of_dates)