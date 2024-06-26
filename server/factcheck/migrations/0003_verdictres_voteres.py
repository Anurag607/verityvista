# Generated by Django 5.0.4 on 2024-04-06 20:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_alter_expert_request_username_and_more'),
        ('factcheck', '0002_factresmodel_message_factresmodel_nosentimentres'),
    ]

    operations = [
        migrations.CreateModel(
            name='VerdictRes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('postresID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='factcheck.factresmodel')),
                ('userID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.user', to_field='display_name')),
            ],
        ),
        migrations.CreateModel(
            name='VoteRes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('postreqID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='factcheck.factreqmodel')),
                ('userID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.user', to_field='display_name')),
            ],
        ),
    ]
