# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-21 16:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map_page', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='artifact',
            name='latitude',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='artifact',
            name='longitude',
            field=models.CharField(default='00', max_length=100),
            preserve_default=False,
        ),
    ]
