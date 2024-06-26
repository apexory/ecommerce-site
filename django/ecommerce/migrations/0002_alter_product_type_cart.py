# Generated by Django 4.2.13 on 2024-06-24 07:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ecommerce', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='type',
            field=models.CharField(choices=[('Speakers', 'Speakers'), ('Headphones', 'Headphones'), ('Smartphones', 'Smartphones'), ('Computers', 'Computers & Accessories'), ('Camera', 'Camera & Photo'), ('Games', 'Video Games'), ('Smartwatches', 'Smartwatches'), ('TV', 'TV')], max_length=30),
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=30)),
                ('title', models.CharField(max_length=50)),
                ('price', models.IntegerField()),
                ('description', models.TextField()),
                ('count', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
