<div id="graph"></div>

<script type="application/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.7.3/d3.min.js"></script>
<script type="application/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"></script>
<script type="application/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="application/javascript" src="exit-polls.js"></script>
<script type="x-tmpl-mustache" id="dataset-chooser-tmpl">
	{% raw %}
	<form id="dataset-chooser">
		{{#datasets}}
			<input id="{{id}}" type="checkbox" value="false">
			<label for="{{id}}">
				<svg width="20" height="20">
					<g fill="none" stroke-width="3">
						<path class="label-line" stroke="rgba(0,0,0,0)" d="M0,10L20,10"></path>
					</g>
				</svg>
				{{friendly}}
			</label>
		{{/datasets}}
	</form>
	{% endraw %}
</script>