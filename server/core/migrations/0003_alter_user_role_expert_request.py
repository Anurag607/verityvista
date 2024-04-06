# Generated by Django 5.0.4 on 2024-04-06 18:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_user_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('user', 'normal user'), ('expert', 'domain expert'), ('admin', 'moderator')], max_length=50),
        ),
        migrations.CreateModel(
            name='expert_request',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('verification_img', models.CharField(max_length=100)),
                ('status', models.CharField(default='pending', max_length=50)),
                ('username', models.ForeignKey(max_length=50, on_delete=django.db.models.deletion.CASCADE, to='core.user')),
            ],
        ),
    ]
