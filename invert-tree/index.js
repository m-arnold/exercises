function invertTree(tree) {

    var temp;

    if (tree.left && tree.right) {

        temp = tree.left;

        tree.left = tree.right;
        tree.right = temp;

        invertTree(tree.left);
        invertTree(tree.right);

    } else if (tree.right && !tree.left) {

        tree.left = tree.right;
        delete tree.right;
        invertTree(tree.left);

    } else if (tree.left && !tree.right) {

        tree.right = tree.left;
        delete tree.left;
        invertTree(tree.right);

    }
}

module.exports = invertTree;
