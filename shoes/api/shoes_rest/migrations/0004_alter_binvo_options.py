# Generated by Django 4.0.3 on 2022-10-20 04:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0003_alter_binvo_options_rename_name_binvo_closet_name'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='binvo',
            options={'verbose_name': 'BinVO', 'verbose_name_plural': 'BinVOs'},
        ),
    ]
