import os
from os import path
from typing import Tuple
import random

from db.manager import DbManager

IMGS_DIR = '/service_data/images'
img_path = lambda x='': path.join(IMGS_DIR, x)

def import_data_on_fs_to_db(db: DbManager):
    random.seed()
    for name in os.listdir(IMGS_DIR):
        img_id = name.split('.')[0]

        db.insert_record(img_file_id=img_id, lat=random.random() * 180 - 90, lon=random.random() * 360 - 180)

def get_img_path_by_id(img_id: str) -> Tuple[str, bool]:
    pa = img_path(f'{str(img_id)}.png')
    return pa, path.isfile(pa)

