# Generated by Django 5.0.4 on 2024-04-06 01:10

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FactReqModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=50)),
                ('heading', models.CharField(max_length=150)),
                ('content', models.CharField(max_length=500)),
                ('imageLink', models.CharField(blank=True, max_length=500)),
                ('refLink', models.CharField(max_length=500)),
                ('upvote', models.IntegerField(default=0)),
                ('downvote', models.IntegerField(default=0)),
                ('dateCreated', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='FactResModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('countPosRes', models.IntegerField(default=0)),
                ('countNegRes', models.IntegerField(default=0)),
                ('closed', models.BooleanField(default=False)),
                ('foreignId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='factcheck.factreqmodel')),
            ],
        ),
    ]