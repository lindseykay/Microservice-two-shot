# Wardrobify

Team:

* Person 1 - Lindsey Carlson - shoes
* Person 2 - Mason Amato - hats

## Design

## Shoes microservice

Two models: Shoe and BinVO

The Shoe model:
    -represents one pair of shoes in the wardrobe bun
    -properties include: manufacturer, model_name, color, pictureurl, and the bin to which it belong (foreign key to BinVO model)

The BinVO
    -a value object
    -properties include import_href and closet_name
    -this model is polled from the Wardrobe microservice Bin model

The views:

Api_list_shoes
    -handles GET and POST requests
    -endpoint: "http://localhost:8080/api/shoes/
    -GET request returns list of shoes
    -POST request creates a new shoe

Api_show_show
    -handles GET and DELETE requests
    -endpoint: "http://localhost:8080/api/shoes/<int:pk>
    -GET request return shoe details
    -DELETE request deletes a shoe instance


The poller:
    -polls Bin model data from the Wardrobe api every 10 seconds, creating corresponding BinVO instance for every Bin instance.



## Hats microservice

Explain your models and integration with the wardrobe
microservice, here.
