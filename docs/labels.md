# Labels

## Show zeros

Some situations may require that 0 values be rendered on the map and others may require the 0 values to be omitted.
The default behaviour is that 0s are rendered. If you do not want 0 values to render for a certain layer, update the layer configuration as

```
{
    ...
    "labels": {
        ...
        "showZeros": false
        ...
    }
    ...
}
```

The fill color needs to be set to white for 0 limit so that it provides the illusion of no data rendered. If you choose to have another color other than white, the fill will render on the map but will have no value associated with it.

Here is an example:

```
{
    ...
    "categories": {
		...
		"color": ["#ffffff","#c7e9c0","#a1d99b","#74c476","#31a354","#006d2c"
        ],
		"limit": [0,13,32,52,61,100],
    }
    ...

}

```
