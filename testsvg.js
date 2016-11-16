var rsr = Raphael('map', '720.0', '540.0'); 

var group_a = rsr.set(); 

var path_b = rsr.path("m0 0l720.0 0l0 540.0l-720.0 0z").attr({fill: '#000000',"fill-opacity": '0.0',"fill-rule": 'nonzero',"clip-path": 'url(#p.0)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_b'); 
var path_c = rsr.path("m136.0 67.480316l221.98425 0l0 122.01575l-221.98425 0z").attr({fill: '#cfe2f3',"fill-rule": 'nonzero',"clip-path": 'url(#p.0)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_c'); 
var path_d = rsr.path("m136.0 67.480316l221.98425 0l0 122.01575l-221.98425 0z").attr({stroke: '#000000',"stroke-width": '1',"stroke-linejoin": 'round',"stroke-linecap": 'butt',"fill-rule": 'nonzero',"clip-path": 'url(#p.0)',parent: 'group_a','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_d'); 
var path_e = rsr.path("m365.0 190.48819l0 -124.0l153.00787 124.0z").attr({fill: '#fff2cc',"fill-rule": 'nonzero',"clip-path": 'url(#p.0)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_e'); 
var path_f = rsr.path("m365.0 190.48819l0 -124.0l153.00787 124.0z").attr({stroke: '#000000',"stroke-width": '1',"stroke-linejoin": 'round',"stroke-linecap": 'butt',"fill-rule": 'nonzero',"clip-path": 'url(#p.0)',parent: 'group_a','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_f'); 
var path_g = rsr.path("m142.0 270.0l0 0c0 -41.147385 35.5916 -74.50394 79.49606 -74.50394l0 0c43.90445 0 79.49606 33.356552 79.49606 74.50394l0 0c0 41.1474 -35.591614 74.50394 -79.49606 74.50394l0 0c-43.904465 0 -79.49606 -33.356537 -79.49606 -74.50394z").attr({fill: '#f4cccc',"fill-rule": 'nonzero',"clip-path": 'url(#p.0)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_g'); 
var path_h = rsr.path("m142.0 270.0l0 0c0 -41.147385 35.5916 -74.50394 79.49606 -74.50394l0 0c43.90445 0 79.49606 33.356552 79.49606 74.50394l0 0c0 41.1474 -35.591614 74.50394 -79.49606 74.50394l0 0c-43.904465 0 -79.49606 -33.356537 -79.49606 -74.50394z").attr({stroke: '#000000',"stroke-width": '1',"stroke-linejoin": 'round',"stroke-linecap": 'butt',"fill-rule": 'nonzero',"clip-path": 'url(#p.0)',parent: 'group_a','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_h'); 
var path_i = rsr.path("m285.99213 195.49475l193.0 0l-38.600006 131.0l-115.79999 0z").attr({fill: '#d9ead3',"fill-rule": 'nonzero',"clip-path": 'url(#p.0)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_i'); 
var path_j = rsr.path("m285.99213 195.49475l193.0 0l-38.600006 131.0l-115.79999 0z").attr({stroke: '#000000',"stroke-width": '1',"stroke-linejoin": 'round',"stroke-linecap": 'butt',"fill-rule": 'nonzero',"clip-path": 'url(#p.0)',parent: 'group_a','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_j'); group_a.attr({'clip-path': 'url(#p.0)','name': 'group_a'}); 

var rsrGroups = [group_a]; 
group_a.push( path_b , path_c , path_d , path_e , path_f , path_g , path_h , path_i , path_j );

for (var i = 0; i < rsrGroups.length; i++)
	{
	rsrGroups[i].mouseover(function(){
		this.node.style.opacity = 0.7;
		});
	rsrGroups[i].mouseout(function(){
		this.node.style.opacity = 1; 
		});
	}
	
