var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_img_width = 20;
block_img_height = 20;

var player_object = "";
var block_img_object = "";

function player____update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeigth(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);

    });
}

function new__image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);

    });
}